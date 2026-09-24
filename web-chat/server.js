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

// Anthem Guide agent knowledge base with real Elevance Health information
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
    knowledgeBase: "https://www.elevancehealth.com/",
    
    // Real Elevance Health information from website
    companyInfo: {
        name: "Elevance Health",
        purpose: "Improving the health of humanity",
        mission: "Elevating whole health and advancing health beyond healthcare",
        description: "A health company dedicated to improving health outcomes, lowering costs, and simplifying experiences",
        approach: "Whole health approach that serves people across their entire health journey and addresses their full range of needs"
    },
    
    services: [
        "Health plans",
        "Clinical solutions",
        "Behavioral health services",
        "Pharmacy solutions",
        "Complex-care solutions"
    ],
    
    keyFocusAreas: [
        "Whole Health & What Drives It",
        "Community Health",
        "Health Equity",
        "Digitally Enabled Healthcare",
        "Consumer-Centered Health System"
    ],
    
    researchAreas: [
        "Physical Drivers of Health",
        "Behavioral Drivers of Health",
        "Social Drivers of Health",
        "Peer-Reviewed Research"
    ],
    
    programs: [
        "Community Pharmacy Total Care (CPTC) program",
        "Advancing Health Together initiative",
        "Whole Health Index",
        "Care Provider Partnership programs"
    ]
};

// Enhanced response system with real Elevance Health information
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return `Hello! I'm the Anthem Guide agent, specialized in Elevance Health web guide development. I can help you with information about ${anthemGuideKnowledge.companyInfo.name} and their mission to "${anthemGuideKnowledge.companyInfo.purpose}". How can I assist you today?`;
    }
    
    // Help responses
    if (message.includes('help') || message.includes('what can you do')) {
        return `I can help you with:\n• ${anthemGuideKnowledge.expertise.join('\n• ')}\n\nMy capabilities include:\n• ${anthemGuideKnowledge.capabilities.join('\n• ')}\n\nI have access to real information about Elevance Health including their services, programs, and approach to whole health.`;
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
        return `For any inquiries about the Anthem Guide agent, you can contact: ${anthemGuideKnowledge.contact}\n\nFor Elevance Health corporate information, visit their official website at ${anthemGuideKnowledge.knowledgeBase}`;
    }
    
    // Company information
    if (message.includes('elevance') || message.includes('company') || message.includes('about') || message.includes('who')) {
        return `${anthemGuideKnowledge.companyInfo.name} is ${anthemGuideKnowledge.companyInfo.description}. Their bold purpose is "${anthemGuideKnowledge.companyInfo.purpose}" and they focus on "${anthemGuideKnowledge.companyInfo.mission}".\n\nTheir approach: ${anthemGuideKnowledge.companyInfo.approach}.`;
    }
    
    // Services information
    if (message.includes('service') || message.includes('offer') || message.includes('provide')) {
        return `Elevance Health offers comprehensive health solutions including:\n• ${anthemGuideKnowledge.services.join('\n• ')}\n\nThey focus on a whole health approach that serves people across their entire health journey.`;
    }
    
    // Key focus areas
    if (message.includes('focus') || message.includes('area') || message.includes('approach')) {
        return `Elevance Health's key focus areas include:\n• ${anthemGuideKnowledge.keyFocusAreas.join('\n• ')}\n\nThese areas reflect their commitment to elevating whole health and advancing health beyond healthcare.`;
    }
    
    // Research information
    if (message.includes('research') || message.includes('study') || message.includes('data')) {
        return `Elevance Health conducts research in several key areas:\n• ${anthemGuideKnowledge.researchAreas.join('\n• ')}\n\nTheir research supports their commitment to innovation and pursuit of moving health forward.`;
    }
    
    // Programs and initiatives
    if (message.includes('program') || message.includes('initiative') || message.includes('project')) {
        return `Elevance Health runs several important programs:\n• ${anthemGuideKnowledge.programs.join('\n• ')}\n\nFor example, the Community Pharmacy Total Care (CPTC) program connects members with complex health conditions to independent community pharmacies for personalized care.`;
    }
    
    // Whole health information
    if (message.includes('whole health') || message.includes('holistic') || message.includes('comprehensive')) {
        return `Elevance Health's whole health approach serves people across their entire health journey and addresses their full range of needs with an integrated approach. This includes physical, behavioral, social, and community health factors that influence overall well-being.`;
    }
    
    // Community health
    if (message.includes('community') || message.includes('social') || message.includes('local')) {
        return `Community health plays a crucial role in Elevance Health's approach. They focus on how neighborhoods, policies, and opportunities shape health outcomes. Their initiatives include community pharmacies, health equity programs, and partnerships with local organizations to strengthen communities.`;
    }
    
    // Website information
    if (message.includes('website') || message.includes('resource') || message.includes('reference') || message.includes('link')) {
        return `The official Elevance Health website is available at: ${anthemGuideKnowledge.knowledgeBase}\n\nThere you can find detailed information about their services, research, stories, and approach to whole health.`;
    }
    
    // Web guide specific
    if (message.includes('web guide') || message.includes('guide') || message.includes('documentation')) {
        return `I specialize in web guide development for Elevance Health. I can help with creating guides that accurately reflect their services like ${anthemGuideKnowledge.services.slice(0, 3).join(', ')}, and their focus on ${anthemGuideKnowledge.keyFocusAreas[0]}. What specific aspect would you like assistance with?`;
    }
    
    // Healthcare compliance
    if (message.includes('compliance') || message.includes('hipaa') || message.includes('regulatory')) {
        return "I ensure all content meets healthcare industry standards, HIPAA compliance where applicable, and Elevance Health's specific policies. This includes accuracy in healthcare information, proper documentation, and stakeholder coordination for content approval.";
    }
    
    // Technical implementation
    if (message.includes('technical') || message.includes('html') || message.includes('css') || message.includes('javascript')) {
        return "I can assist with technical implementation including HTML, CSS, JavaScript, and frontend frameworks for web guide development. I also help with testing across different browsers and devices to ensure optimal user experience.";
    }
    
    // Default response with company context
    return `I'm here to help with Elevance Health web guide development and can provide information about ${anthemGuideKnowledge.companyInfo.name} and their services. I can assist with web guide development, content management, technical implementation, user experience optimization, and healthcare compliance. Would you like to know more about their services, approach to health, or specific web guide development assistance?`;
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