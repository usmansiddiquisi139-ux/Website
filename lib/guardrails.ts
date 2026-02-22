/**
 * AI Guardrails Utility
 * Provides lightweight protection against Prompt Injection, PII leakage, and Unsafe Content.
 */

export interface GuardrailResult {
    content: string;
    flaggedCategories: string[];
    isSafe: boolean;
    metadata: Record<string, any>;
}

export class AIGuardrails {
    private static PII_PATTERNS = {
        EMAIL: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        PHONE: /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
        // Add more patterns as needed
    };

    private static PI_PATTERNS = [
        /ignore (all )?previous instructions/i,
        /system prompt/i,
        /you are now/i,
        /disregard/i,
        /bypass/i,
        /jailbreak/i,
        /override/i,
    ];

    /**
     * Redacts PII from the content
     */
    static redactPII(content: string): string {
        let redacted = content;

        // Redact Emails
        redacted = redacted.replace(this.PII_PATTERNS.EMAIL, '[EMAIL_REDACTED]');

        // Redact Phones
        redacted = redacted.replace(this.PII_PATTERNS.PHONE, '[PHONE_REDACTED]');

        return redacted;
    }

    /**
     * Detects potential Prompt Injection attempts
     */
    static detectInjection(content: string): boolean {
        return this.PI_PATTERNS.some(pattern => pattern.test(content));
    }

    /**
     * Processes content through all guardrails
     */
    static async process(content: string, options = { redact: true, checkInjection: true }): Promise<GuardrailResult> {
        const flaggedCategories: string[] = [];
        let processedContent = content;

        if (options.checkInjection && this.detectInjection(content)) {
            flaggedCategories.push('PROMPT_INJECTION');
        }

        if (options.redact) {
            processedContent = this.redactPII(processedContent);
        }

        return {
            content: processedContent,
            flaggedCategories,
            isSafe: flaggedCategories.length === 0,
            metadata: {
                timestamp: new Date().toISOString(),
            }
        };
    }
}
