// Set up an array of fish names and rarity levels
const fish = [
    { name: 'Goldfish', rarity: 'common' },
    { name: 'Rainbow Trout', rarity: 'uncommon' },
    { name: 'Piranha', rarity: 'rare' },
    { name: 'Shark', rarity: 'epic' },
    { name: 'Whale', rarity: 'legendary' }
  ];
  
  // Define a function for generating a random fish
  const generateFish = () => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
  
    // Use the random number to determine which fish to catch
    if (randomNumber < 0.8) {
      return fish[0];
    } else if (randomNumber < 0.95) {
      return fish[1];
    } else if (randomNumber < 0.99) {
      return fish[2];
    } else if (randomNumber < 0.999) {
      return fish[3];
    } else {
      return fish[4];
    }
  };
  
  // Set up a command for playing the fishing game
  client.on('message', message => {
    // Split the message into individual words
    const args = message.content.split(/ +/);
    // Get the command from the first word of the message
    const command = args.shift().toLowerCase();
  
    // Check if the command is 'fish'
    if (command === 'fish') {
      // Generate a random fish
      const caughtFish = generateFish();
  
      // Announce the catch to the channel
      message.channel.send(`You caught a ${caughtFish.rarity} ${caughtFish.name}!`);
    }
  });