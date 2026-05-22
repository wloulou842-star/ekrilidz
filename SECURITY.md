# Security Policy

## 🔐 Security Best Practices

This document outlines the security practices and policies for the Ekrilidz project.

### Sensitive Data Management

1. **Never commit secrets to the repository**
   - Use environment variables for all sensitive data
   - Create a `.env.local` file based on `.env.example`
   - Add `.env.local` to `.gitignore` (already done)

2. **Use GitHub Secrets for CI/CD**
   - Store API keys, tokens, and passwords in GitHub Secrets
   - Never hardcode credentials in workflows

3. **Protect Sensitive Files**
   - `.env` files
   - Private keys (`.key`, `.pem`)
   - Certificate files
   - Configuration files with credentials

### Dependency Security

- Keep dependencies up to date
- Review security advisories regularly
- Use `npm audit` to check for vulnerabilities
- Enable Dependabot for automatic updates

### Code Review

- All code changes require review before merging
- Pay special attention to security-related changes
- Follow the guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md)

### Reporting Security Vulnerabilities

**Do not open a public issue for security vulnerabilities.**

If you discover a security vulnerability, please email the maintainers directly:
- wloulou842@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

## 🛡️ Security Headers

If this is a web application, ensure the following headers are implemented:

- Content-Security-Policy (CSP)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security (HSTS)

## 🔍 Regular Security Audits

We recommend:

1. Regular dependency audits
2. Code security scanning
3. Penetration testing (for production systems)
4. Security policy reviews

## ✅ Checklist for New Contributors

- [ ] Read this security policy
- [ ] Never commit secrets or sensitive data
- [ ] Use `.env.local` for local configuration
- [ ] Run `npm audit` before committing
- [ ] Review code changes for security issues
- [ ] Follow coding standards

## 📚 Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [npm Security](https://docs.npmjs.com/policies/security)
- [Node.js Security](https://nodejs.org/en/docs/guides/security/)
