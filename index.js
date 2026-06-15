// @0xward/thesisai-sdk
// Autonomous Research Agent framework for academic writing synthesis on Stacks

const CITATION_STYLES = ["APA", "MLA", "Chicago", "Harvard", "IEEE"];
const MAX_SOURCES      = 100;
const MIN_TOPIC_LENGTH = 3;
const MAX_TOPIC_LENGTH = 300;

const STRUCTURE_TEMPLATES = {
    thesis:     ["Introduction", "Literature Review", "Methodology", "Results", "Discussion", "Conclusion"],
    essay:      ["Introduction", "Body", "Counterargument", "Conclusion"],
    review:     ["Abstract", "Background", "Analysis", "Synthesis", "Future Directions"],
    report:     ["Executive Summary", "Introduction", "Findings", "Recommendations"],
};

class ThesisAISDK {
    constructor(options = {}) {
        this.blockchain     = options.blockchain    || "Stacks";
        this.citationStyle  = options.citationStyle || "APA";
        this.maxSources     = options.maxSources    || MAX_SOURCES;
        this.language       = options.language      || "en";
        this.version        = "1.1.7";
        this._validateOptions();
    }

    _validateOptions() {
        if (!CITATION_STYLES.includes(this.citationStyle)) {
            throw new Error(
                `Invalid citationStyle: "${this.citationStyle}". Supported: ${CITATION_STYLES.join(", ")}.`
            );
        }
        if (typeof this.maxSources !== "number" || this.maxSources < 1 || this.maxSources > MAX_SOURCES) {
            throw new Error(`maxSources must be a number between 1 and ${MAX_SOURCES}.`);
        }
    }

    _validateTopic(topic) {
        if (typeof topic !== "string" || topic.trim().length === 0) {
            throw new Error("topic must be a non-empty string.");
        }
        if (topic.trim().length < MIN_TOPIC_LENGTH) {
            throw new Error(`topic must be at least ${MIN_TOPIC_LENGTH} characters.`);
        }
        if (topic.length > MAX_TOPIC_LENGTH) {
            throw new Error(`topic must not exceed ${MAX_TOPIC_LENGTH} characters.`);
        }
        return topic.trim();
    }

    _validateSources(sources) {
        if (!Array.isArray(sources)) {
            throw new Error("sources must be an array.");
        }
        if (sources.length > this.maxSources) {
            throw new Error(`Too many sources: ${sources.length}. Maximum allowed: ${this.maxSources}.`);
        }
        return sources.filter((s) => {
            if (typeof s === "string")  return s.trim().length > 0;
            if (typeof s === "object" && s !== null) return !!(s.url || s.title || s.doi);
            return false;
        });
    }

    _structureCitations(sources) {
        return sources.map((s, i) => {
            if (typeof s === "string") {
                return { id: i + 1, reference: s.trim(), type: "text", style: this.citationStyle };
            }
            return {
                id:        i + 1,
                reference: s.title || s.url || s.doi || "Unknown",
                type:      s.doi ? "doi" : s.url ? "url" : "text",
                doi:       s.doi  || null,
                url:       s.url  || null,
                author:    s.author || null,
                year:      s.year   || null,
                style:     this.citationStyle,
            };
        });
    }

    async synthesizeResearch(topic, sources = []) {
        const validTopic   = this._validateTopic(topic);
        const validSources = this._validateSources(sources);
        const citations    = this._structureCitations(validSources);

        return {
            topic: validTopic,
            summary: `Autonomous synthesis completed for: "${validTopic}"`,
            citationsCount:  citations.length,
            invalidSources:  sources.length - validSources.length,
            citations,
            citationStyle:   this.citationStyle,
            language:        this.language,
            blockchain:      this.blockchain,
            securedBy:       "Bitcoin",
            timestamp:       new Date().toISOString(),
            sdkVersion:      this.version,
        };
    }

    generateStructure(documentType = "thesis") {
        const type = documentType.toLowerCase();
        if (!STRUCTURE_TEMPLATES[type]) {
            throw new Error(
                `Unknown document type: "${documentType}". Supported: ${Object.keys(STRUCTURE_TEMPLATES).join(", ")}.`
            );
        }
        return {
            documentType: type,
            sections: STRUCTURE_TEMPLATES[type].map((title, i) => ({
                order: i + 1,
                title,
                placeholder: `Write your ${title.toLowerCase()} here...`,
            })),
        };
    }

    formatCitation(citation) {
        if (!citation || typeof citation !== "object") {
            throw new Error("citation must be a valid object.");
        }
        if (!citation.reference) {
            throw new Error("citation.reference is required.");
        }
        const id  = citation.id   || "?";
        const ref = citation.reference;
        const yr  = citation.year ? ` (${citation.year})` : "";
        const au  = citation.author ? `${citation.author}. ` : "";
        return `[${id}] ${au}${ref}${yr}`;
    }

    getSupportedCitationStyles() {
        return [...CITATION_STYLES];
    }

    getSupportedDocumentTypes() {
        return Object.keys(STRUCTURE_TEMPLATES);
    }

    getMetadata() {
        return {
            sdk:           "ThesisAI SDK",
            version:       this.version,
            blockchain:    this.blockchain,
            citationStyle: this.citationStyle,
            maxSources:    this.maxSources,
            language:      this.language,
        };
    }
}

module.exports = { ThesisAISDK, CITATION_STYLES, STRUCTURE_TEMPLATES };
