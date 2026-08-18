const { Client } = require('discord.js-selfbot-v13');
const express = require('express');

// --- WEB SUNUCUSU (Render'ın uyutmaması için) ---
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hesap şu anda aktif tutuluyor!');
});

app.listen(port, () => {
  console.log(`Web sunucusu ${port} portunda başlatıldı.`);
});

// --- DISCORD BAĞLANTISI ---
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`${client.user.username} hesabına giriş yapıldı ve aktif!`);
  
  // İsteğe bağlı: Hesabın durumunu "Rahatsız Etmeyin" veya "Boşta" yapabilirsiniz
  // client.user.setStatus('dnd'); 
});

// TOKEN'ınızı kodun içine yazmayın, Render üzerinden ortam değişkeni olarak ekleyeceğiz.
client.login(process.env.TOKEN);
