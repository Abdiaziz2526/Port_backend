import TaxRate from '../models/taxRateModel.js';

// Get all tax rates
export const getAllRate = async (req, res) => {
  try {
    const taxRates = await TaxRate.find();
    res.status(200).json(taxRates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get tax rate by ID
export const getRateById = async (req, res) => {
  const { id } = req.params;
  try {
    const taxRate = await TaxRate.findById(id);
    if (!taxRate) {
      return res.status(404).json({ message: 'Tax rate not found' });
    }
    res.status(200).json(taxRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Register a new tax rate
export const registerNewRate = async (req, res) => {
  const { minIncome, maxIncome, rate } = req.body;
  const newTaxRate = new TaxRate({ minIncome, maxIncome, rate });
  try {
    await newTaxRate.save();
    res.status(201).json(newTaxRate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing tax rate
export const updateRate = async (req, res) => {
  const { id } = req.params;
  const { minIncome, maxIncome, rate } = req.body;
  try {
    const updatedTaxRate = await TaxRate.findByIdAndUpdate(
      id,
      { minIncome, maxIncome, rate },
      { new: true }
    );
    if (!updatedTaxRate) {
      return res.status(404).json({ message: 'Tax rate not found' });
    }
    res.status(200).json(updatedTaxRate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a tax rate
export const deleteRate = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTaxRate = await TaxRate.findByIdAndDelete(id);
    if (!deletedTaxRate) {
      return res.status(404).json({ message: 'Tax rate not found' });
    }
    res.status(200).json({ message: 'Tax rate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
