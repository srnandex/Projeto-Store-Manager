const validaProducts = (req, res, next) => {
  const { name } = req.body;
  const nameObri = { message: '"name" is required' };
  const nameMin = { message: '"name" length must be at least 5 characters long' };

  if (!name) return res.status(400).json(nameObri);
  if (name.length < 5) return res.status(422).json(nameMin);
  
  next();
};

module.exports = {
  validaProducts,
};
