export const en = {
  languageSelect: {
    title: "Select Language",
    english: "English",
    arabic: "Arabic"
  },
  common: {
    next: "Next",
    previous: "Previous",
    copy: "Copy",
    copied: "Copied!",
    explanation: "Explanation",
    purpose: "Purpose"
  },
  attacks: {
    title: "DDoS Attack Commands Reference",
    udpFlood: {
      name: "UDP Flood Attack",
      explanation: "Floods the target IP with UDP packets (DNS port 53) using random source IPs",
      purpose: "Overwhelm UDP-based services (e.g., DNS) to test denial-of-service resilience"
    },
    icmpFlood: {
      name: "ICMP Flood (Ping Flood)",
      explanation: "Sends a flood of ICMP (ping) packets to the target IP using spoofed IPs",
      purpose: "Test how the target's network handles ICMP echo request storms"
    },
    // Add all 20+ attacks here
  }
};
