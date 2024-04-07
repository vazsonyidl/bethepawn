export const getContentSecurityPolicy = (): string => {
    const isDevEnvironment = import.meta.env.DEV;
    const isProdEnvironment = import.meta.env.PROD;

    if (isDevEnvironment) {
        return "default-src 'self'; style-src 'unsafe-inline'";
    }

    if (isProdEnvironment) {
        return "default-src 'self'; style-src http://localhost:4321/ https://bethepawn.com/; script-src 'self' static.cloudflareinsights.com; connect-src cloudflareinsights.com";
    }

    return "";

}