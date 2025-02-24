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
      explanation: "Floods the target IP with UDP packets (DNS port 53) using random source IPs.",
      purpose: "Overwhelm UDP-based services (e.g., DNS) to test denial-of-service resilience."
    },
    icmpFlood: {
      name: "ICMP Flood (Ping Flood)",
      explanation: "Sends a flood of ICMP (ping) packets to the target IP using spoofed IPs.",
      purpose: "Test how the target's network handles ICMP echo request storms."
    },
    fragmentedPacket: {
      name: "Fragmented Packet Attack",
      explanation: "Sends fragmented TCP SYN packets to the target IP on port 80.",
      purpose: "Test how the target handles fragmented traffic (common evasion technique)."
    },
    tcpFinScan: {
      name: "TCP FIN Scan",
      explanation: "Sends TCP FIN packets to ports 1-1000 to check for open/closed ports.",
      purpose: "Stealthy port scanning (closed ports respond with RST, open ports may ignore)."
    },
    christmasTree: {
      name: "TCP Christmas Tree Attack",
      explanation: "Sends packets with all TCP flags set to the target's SSH port.",
      purpose: "Test handling of malformed packets and trigger IDS/IPS responses."
    },
    customHttpGet: {
      name: "Custom HTTP GET Request",
      explanation: "Injects a raw HTTP GET request into TCP SYN packets.",
      purpose: "Test web server responses or bypass basic packet inspection."
    },
    tcpAckScan: {
      name: "TCP ACK Scan",
      explanation: "Sends TCP ACK packets to identify firewall rules.",
      purpose: "Determine if ports are filtered (no response) or unfiltered (RST response)."
    },
    spoofedPort: {
      name: "Spoofed Source Port",
      explanation: "Uses HTTPS port (443) as source while targeting HTTP port (80).",
      purpose: "Evade port-based firewall rules or mimic legitimate traffic."
    },
    adjustPacketTiming: {
      name: "Adjust Packet Timing",
      explanation: "Sends packets at precise intervals (1 packet per millisecond).",
      purpose: "Test network performance under high-speed traffic conditions."
    },
    icmpExfiltration: {
      name: "ICMP Data Exfiltration",
      explanation: "Embeds data in ICMP echo payloads.",
      purpose: "Simulate data exfiltration over ICMP (often ignored by basic monitoring)."
    },
    ttlManipulation: {
      name: "TTL Manipulation",
      explanation: "Sets Time-To-Live value to 1 to control packet reach.",
      purpose: "Test TTL-based filtering or trigger ICMP Time Exceeded responses."
    },
    traceroute: {
      name: "TCP Traceroute",
      explanation: "Maps network path by incrementing TTL values.",
      purpose: "Identify network hops and routing issues to specific ports."
    },
    customPattern: {
      name: "Custom Data Pattern",
      explanation: "Sends packets with specific hex pattern (0xdeadbeef).",
      purpose: "Test how applications handle specific payload patterns."
    },
    mtuTest: {
      name: "MTU Size Test",
      explanation: "Sends a 1500-byte packet to test MTU limits.",
      purpose: "Diagnose fragmentation issues or mismatched MTU settings."
    },
    synFlood: {
      name: "SYN Flood Attack",
      explanation: "Floods target with TCP SYN packets on port 135.",
      purpose: "Test target's ability to handle TCP connection attempts."
    },
    randomData: {
      name: "Random Data Flood",
      explanation: "Sends large amounts of random data to target.",
      purpose: "Test target's ability to handle large volumes of arbitrary data."
    },
    landAttack: {
      name: "LAND Attack",
      explanation: "Uses target's own IP as both source and destination.",
      purpose: "Test protection against self-targeted denial of service."
    },
    massiveSynFlood: {
      name: "Massive SYN Flood",
      explanation: "Sends 10000 large SYN packets with random source IPs.",
      purpose: "Test target's resilience against high-volume TCP flooding."
    }
  }
};