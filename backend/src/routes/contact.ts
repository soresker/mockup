import express from 'express';
import { sendContactEmail } from '../services/emailService';

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    await sendContactEmail({
      name,
      email,
      phone,
      message
    });

    res.json({ success: true, message: 'Mesajınız başarıyla gönderildi.' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.' 
    });
  }
});

export default router; 