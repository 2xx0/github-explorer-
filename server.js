const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/full-profile/:username', async (req, res) => {
    const { username } = req.params;
    try {
        const [profile, repos] = await Promise.all([
            axios.get(`https://api.github.com/users/${username}`).then(r => r.data),
            axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then(r => r.data)
        ]);
        res.json({ profile, repos });
    } catch (error) {
        res.status(404).json({ error: "المستخدم غير موجود" });
    }
});

app.listen(PORT, () => {
    console.log(`-----------------------------------------`);
    console.log(`🚀 السيرفر يعمل على: http://localhost:3000`);
    console.log(`-----------------------------------------`);
});