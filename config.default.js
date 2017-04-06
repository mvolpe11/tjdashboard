exports.webServerNumber = 8078;

// User-specific CONFIGURATION
exports.conversationWorkspaceId = '';

// Create the credentials object for export
exports.credentials = {};

// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
    password: '',
    username: ''
};

// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
    password: '',
    username: ''
};

// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
    password: '',
    username: ''
};

// Watson Tone Analyzer
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.tone_analyzer = {
    password: '',
    username: ''
};

// Watson Vision Recognition
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.visual_recognition = {
    api_key: '',
    version: '2016-05-19'
}

// IBM Weather Company
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.weather = {
    url: "",
    username: ' ',
    password: ' ',
    host: " ",
    port: 443,
};
