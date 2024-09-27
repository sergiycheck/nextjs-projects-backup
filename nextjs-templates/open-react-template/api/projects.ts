export const image_600x600 = "https://picsum.photos/seed/picsum/600/600";

export const projects = [
  {
    id: "1",
    project: "Bitoftrade",
    domain: "DeFi",
    features:
      "Easily trade, swap, bridge tokens, and fetch NFTs with Bitoftrade. Manage your crypto assets securely using advanced features in a user-friendly interface.",
    challenges_overcome:
      "Implementing efficient token bridging algorithms, ensuring secure and seamless trade and swap functionality, and integrating NFT fetching capabilities.",
    images: ["/images/home/features/bitoftrade-1.png", "/images/home/features/bitoftrade-2.png"],
  },
  {
    id: "2",
    project: "Tokenframe",
    domain: "Crypto",
    features: `Bridging the gap between the old and the new. Inviting your digital art into your home, office, or gallery. Giving a fresh breath of life and excitement to the NFT community. This is our intention.
      Beauty, art and creativity is what we live for. Progressing the NFT community is what we strive for.`,
    challenges_overcome:
      "Developing an advanced casting algorithm for frames, fetching NFTs from multiple blockchains, and implementing a secure payment system to ensure trust and reliability in transactions.",
    images: ["/images/home/features/tokenframe-1.png", "/images/home/features/tokenframe-2.png"],
  },
  {
    id: "3",
    project: "PixelNft",
    domain: "Crypto GameFi",
    features: `
      🏡 Buy, Sell, and Trade Pixel Land: Your digital real estate in the Crypto Metaverse!
      💰 Stack Pixels Strategically: Build your empire and watch your crypto wealth grow!
      🖼️ Scan and Collect NFTs: Discover rare digital treasures to enhance your gaming experience!
      🌐 Join a Thriving Community: Connect with like-minded individuals and pioneers in the Pixeland community!
      `,
    challenges_overcome: `Develop intuitive onboarding processes, tutorials, and educational materials. Offer incentives for early adopters. 
      Establish a strong community presence and foster meaningful connections between users.`,
    images: ["/images/home/features/pixel-nft-1.png", "/images/home/features/pixel-nft-2.png"],
  },
  {
    id: "4",
    project: "Nft Marketplace",
    domain: "Marketplace",
    features:
      "Explore a dynamic marketplace experience with MarketFlow. Enjoy personalized recommendations, secure transactions, and a user-friendly interface.",
    challenges_overcome:
      "Developing an advanced recommendation algorithm and implementing a secure payment system to ensure trust and reliability in transactions.",
    images: ["/images/home/features/nft-marketplace-1.png", "/images/home/features/nft-marketplace-2.png"],
  },
  {
    id: "5",
    project: "BlindSpot",
    domain: "Cybersecurity",
    features: `🔐 Elevate your cybersecurity defense with blindSpot - the cutting-edge platform using machine learning to scan repositories and peer dependencies. Detect vulnerabilities swiftly, ensuring your codebase is fortified against potential threats. With precision analysis and adaptive threat detection, blindSpot provides real-time insights, eliminating risks before they surface. Seamlessly integrate our platform into your workflow and enjoy the peace of mind that comes with proactive cybersecurity. Embrace innovation, secure your digital assets`,
    challenges_overcome:
      "Building a cybersecurity platform poses challenges such as staying ahead of evolving threats, ensuring constant innovation in threat detection, navigating complex regulatory landscapes, and maintaining seamless integration with diverse systems. Additionally, building user trust, addressing scalability issues, and adapting to emerging technologies are vital hurdles in developing a robust cybersecurity solution.",
    images: ["/images/home/features/cyber-security-1.png", "/images/home/features/cyber-security-2.png"],
  },
  {
    id: "6",
    project: "StreamSync",
    domain: "Entertainment",
    features:
      "Synchronize your favorite music and videos seamlessly across devices with our Stream Sync Service. Enjoy uninterrupted playback, personalized playlists, and an immersive, synchronized audio-visual journey. Elevate your entertainment, anytime, anywhere!",
    challenges_overcome:
      "Developing real-time synchronization, ensuring compatibility with various platforms, addressing latency issues, and securing user data pose challenges in creating a seamless Stream Sync Service. Additionally, meeting diverse user preferences and handling copyright regulations are critical considerations in this dynamic landscape.",
    images: ["/images/home/features/streaming-service-1.png", "/images/home/features/streaming-service-2.jpeg"],
  },
];

export type ProjectItem = {
  id: string;
  project: string;
  domain: string;
  features: string;
  challenges_overcome: string;
  images: string[];
};
