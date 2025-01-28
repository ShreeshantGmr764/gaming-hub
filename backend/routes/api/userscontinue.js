// routes/api/users.js (continued)
const validateLoginInput = require('../../validation/login');

// @route   POST api/users/login
// @desc    Login user and return JWT token
// @access  Public
router.post('/login', async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ password: 'Password is incorrect' });
    }

    // Generate JWT token
    const payload = { id: user.id, name: user.name };
    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: '1h' });

    res.json({
      success: true,
      token: 'Bearer ' + token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
