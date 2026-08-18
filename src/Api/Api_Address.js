export const API_URL =
    window.location.hostname.startsWith("192.168.")
        ? "http://api.home.arpa:3000"
        : "http://191.11.205.228:3000";