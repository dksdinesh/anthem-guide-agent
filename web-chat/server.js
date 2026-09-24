const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve static files
app.use(express.static(__dirname));

// Anthym Guide agent knowledge base
const anthemGuideKnowledge = {
    expertise: [
        "Web Guide Development",
        "Content Management", 
        "Technical Implementation",
        "User Experience",
        "Healthcare Compliance"
    ],
    capabilities: [
        "Creating, updating, and maintaining web-based guides and documentation for Elevance Health services and products",
        "Ensuring accurate, up-to-date, and user-friendly content that aligns with Elevance Health's brand guidelines and regulatory requirements",
        "Assisting with HTML, CSS, JavaScript, and any frontend frameworks used in the web guide implementation",
        "Optimizing the web guide for accessibility, responsiveness, and ease of navigation",
        "Ensuring all content meets healthcare industry standards, HIPAA compliance where applicable, and Elevance Health's specific policies"
    ],
    contact: "dgvc.dinesh@gmail.com",
    knowledgeBase: "https://www.elevancehealth.com/"
};

// Simple rule-based response system (replace with actual AI integration)
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm the Anthem Guide agent, specialized in Elevance Health web guide development. How can I assist you today?";
    }
    
    // Help responses
    if (message.includes('help') || message.includes('what can you do')) {
        return `I can help you with:\n• ${anthemGuideKnowledge.expertise.join('\n• ')}\n\nMy capabilities include:\n• ${anthemGuideKnowledge.capabilities.join('\n• ')}`;
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
        return `For any inquiries, you can contact: ${anthemGuideKnowledge.contact}`;
    }
    
    // Knowledge base
    if (message.includes('website') || message.includes('resource') || message.includes('reference')) {
        return `Our knowledge base is available at: ${anthemGuideKnowledge.knowledgeBase}`;
    }
    
    // Web guide specific
    if (message.includes('web guide') || message.includes('guide') || message.includes('documentation')) {
        return "I specialize in web guide development for Elevance Health. I can help with creating guides, updating content, ensuring compliance, and optimizing user experience. What specific aspect would you like assistance with?";
    }
    
    // Healthcare compliance
    if (message.includes('compliance') || message.includes('hipaa') || message.includes('regulatory')) {
        return "I ensure all content meets healthcare industry standards, HIPAA compliance where applicable, and Elevance Health's specific policies. This includes accuracy in healthcare information, proper documentation, and stakeholder coordination for content approval.";
    }
    
    // Technical implementation
    if (message.includes('technical') || message.includes('html') || message.includes('css') || message.includes('javascript')) {
        return "I can assist with technical implementation including HTML, CSS, JavaScript, and frontend frameworks for web guide development. I also help with testing across different browsers and devices.";
    }
    
    // Default response
    return "I'm here to help with Elevance Health web guide development. I can assist with web guide development, content management, technical implementation, user experience optimization, and healthcare compliance. Could you be more specific about what you need help with?";
}

// Chat endpoint
app.post('/api/chat', (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }
        
        // Generate response (replace with actual AI service call)
        const response = generateResponse(message);
        
        res.json({ response });
    } catch (error) {
        console.error('Error processing chat request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Anthem Guide API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Anthem Guide server running on port ${PORT}`);
    console.log(`Web interface available at http://localhost:${PORT}`);
});