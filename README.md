# Anthem Guide Agent

A specialized subagent for Elevance Health web guide development and maintenance.

## Overview

The Anthem Guide agent is a custom Devin CLI subagent designed to assist with web guide development for Elevance Health. It specializes in healthcare-compliant content management, technical implementation, and user experience optimization.

## Features

- **Web Guide Development**: Creating, updating, and maintaining web-based guides and documentation
- **Content Management**: Ensuring accurate, up-to-date, and user-friendly content
- **Technical Implementation**: HTML, CSS, JavaScript, and frontend framework assistance
- **User Experience**: Accessibility, responsiveness, and navigation optimization
- **Healthcare Compliance**: HIPAA compliance and regulatory requirements

## Installation

### Devin CLI Users

1. Copy the `anthem-guide.md` file to your global agents directory:
   - **Windows**: `%APPDATA%\devin\agents\anthem-guide.md`
   - **Linux/macOS**: `~/.config/devin/agents/anthem-guide.md`

2. The agent will be automatically available in your Devin CLI environment

### Project-Specific Installation

Copy the agent file to your project's `.devin/agents/` directory:
```
your-project/
└── .devin/
    └── agents/
        └── anthem-guide.md
```

## Usage

Invoke the agent by asking the main Devin agent to use the "anthem-guide" subagent:

- "Use the anthem-guide subagent to update the member services section"
- "Have the anthem-guide agent review the new navigation structure"
- "Ask the anthem-guide subagent to implement the new FAQ page"

## Configuration

The agent uses the following configuration:
- **Model**: Sonnet (balanced capability and cost)
- **Tools**: Full access for web development (read, write, edit, exec, web search, etc.)
- **Specialization**: Elevance Health web guide development

## Contact

For any inquiries: dgvc.dinesh@gmail.com

## Resources

- **Knowledge Base**: https://www.elevancehealth.com/
- **Devin CLI Documentation**: https://devin.ai/docs

## Web Chat Interface

A web-based conversational interface is also available for the Anthem Guide agent, allowing users to interact through a modern chat interface.

### Quick Start

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

4. Open your browser to `http://localhost:3000`

For detailed instructions, see the [web-chat README](web-chat/README.md).

## License

This agent configuration is provided as-is for use with the Devin CLI.