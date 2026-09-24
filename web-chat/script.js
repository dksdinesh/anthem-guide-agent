const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// API endpoint - change this to your backend URL
const API_ENDPOINT = '/api/chat'; // Use relative path for same-origin requests

// Check if we're running standalone and use local generation
const isStandalone = window.location.protocol === 'file:';

// Add message to chat
function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = `<p>${content}</p>`;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator-container';
    typingDiv.id = 'typingIndicator';
    
    const typingContent = document.createElement('div');
    typingContent.className = 'typing-indicator';
    typingContent.innerHTML = '<span></span><span></span><span></span>';
    
    typingDiv.appendChild(typingContent);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Send message to backend or use standalone mode
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, true);
    userInput.value = '';
    
    // Disable input while processing
    userInput.disabled = true;
    sendButton.disabled = true;
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        let response;
        
        if (isStandalone) {
            // Use standalone mode with local response generation
            // In standalone mode, we'll use a simple rule-based system
            // since we can't fetch cross-origin from file:// protocol
            response = await generateStandaloneResponse(message);
        } else {
            // Use backend API
            const apiResponse = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });
            
            const data = await apiResponse.json();
            response = data.response;
        }
        
        // Remove typing indicator
        removeTypingIndicator();
        
        // Add bot response to chat
        if (response) {
            addMessage(response);
        } else {
            addMessage('Sorry, I encountered an error processing your request.');
        }
    } catch (error) {
        console.error('Error:', error);
        removeTypingIndicator();
        addMessage('Sorry, I encountered an error. Please try again.');
    } finally {
        // Re-enable input
        userInput.disabled = false;
        sendButton.disabled = false;
        userInput.focus();
    }
}

// Simple standalone response generator (fallback for file:// protocol)
async function generateStandaloneResponse(message) {
    const messageLower = message.toLowerCase();
    
    // Basic responses for standalone mode
    if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
        return "Hello! I'm the Anthem Guide agent. In standalone mode, I can provide basic information about Elevance Health. For full functionality with live website fetching, please run the backend server with Node.js.";
    }
    
    if (messageLower.includes('latest') || messageLower.includes('current') || messageLower.includes('website')) {
        return "To fetch live data from the Elevance Health website, please run the backend server. In standalone mode, I can only provide pre-loaded information. Visit https://www.elevancehealth.com/ for the latest information.";
    }
    
    if (messageLower.includes('elevance') || messageLower.includes('company')) {
        return "Elevance Health is a health company dedicated to improving health outcomes, lowering costs, and simplifying experiences. Their purpose is improving the health of humanity. For live data, please run the backend server.";
    }
    
    return "I'm running in standalone mode. For full functionality including live website fetching from Elevance Health, please run the backend server using Node.js. The standalone version provides basic information only.";
}

// Event listeners
sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Focus input on load
userInput.focus();