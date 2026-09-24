# Anthem Guide Web Chat

A web-based conversational interface for the Anthem Guide agent, allowing users to interact with the Elevance Health web guide assistant through a chat interface.

## Features

- 🎨 Modern, responsive chat interface
- 💬 Real-time conversational AI interaction
- 🏥 Specialized in Elevance Health web guide development
- 🔒 Healthcare compliance aware
- 📱 Mobile-friendly design

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the web-chat directory:
   ```bash
   cd web-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

Once the server is running, you can:

1. Open the web interface in your browser
2. Type your questions about Elevance Health web guides
3. Get specialized assistance with:
   - Web guide development
   - Content management
   - Technical implementation
   - User experience optimization
   - Healthcare compliance

## Current Implementation

The current version uses a rule-based response system. To enhance with actual AI capabilities, you can integrate with services like:

- **OpenAI GPT-4**: Replace the rule-based system with GPT-4 API calls
- **Anthropic Claude**: Integrate Claude API for more sophisticated responses
- **Local LLMs**: Run local models like Llama for privacy and control

## AI Integration

To integrate with an AI service, update the `server.js` file:

1. Add your API key to `.env`:
   ```
   OPENAI_API_KEY=your_key_here
   ```

2. Install the AI service SDK:
   ```bash
   npm install openai
   ```

3. Update the `/api/chat` endpoint to use the AI service instead of the rule-based system

## Deployment

### Local Development
```bash
npm run dev  # Uses nodemon for auto-reload
```

### Production
```bash
npm start  # Standard Node.js server
```

### Cloud Deployment

You can deploy this to various platforms:

- **Heroku**: Simple deployment with Git
- **Vercel/Netlify**: Serverless deployment
- **AWS/Azure/GCP**: Cloud platform deployment
- **Docker**: Containerized deployment

## Customization

### Styling
Edit `styles.css` to customize the appearance

### Agent Behavior
Edit `server.js` to modify the agent's responses and knowledge base

### Frontend Logic
Edit `script.js` to customize chat behavior and UI interactions

## Security Notes

- Never commit `.env` files with real API keys
- Use environment variables for sensitive configuration
- Implement rate limiting for production use
- Add authentication if needed for restricted access

## License

MIT License - See main LICENSE file for details