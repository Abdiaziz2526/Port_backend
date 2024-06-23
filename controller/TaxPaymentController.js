import TaxPayment from '../models/taxPaymentModel.js';


export const getAllTaxPayments = async (req, res) => {
  try {
    const taxPayments = await TaxPayment.find().populate('businessId');
    res.status(200).json(taxPayments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaxPaymentById = async (req, res) => {
  const { id } = req.params; 
  try {
    const taxPayment = await TaxPayment.findById(id).populate('businessId');
    if (!taxPayment) {
      return res.status(404).json({ message: 'Tax payment not found' });
    }
    res.status(200).json(taxPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const addNewTaxPayment = async (req, res) => {
  const { businessId, amount, paymentDate, paymentMethod, transactionId, status } = req.body; // Extract data from request body
  const newTaxPayment = new TaxPayment({ businessId, amount, paymentDate, paymentMethod, transactionId, status }); // Create a new tax payment document
  try {
    await newTaxPayment.save();
    res.status(201).json(newTaxPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateTaxPayment = async (req, res) => {
  const { id } = req.params;
  const { businessId, amount, paymentDate, paymentMethod, transactionId, status } = req.body; // Extract data from request body
  try {
    const updatedTaxPayment = await TaxPayment.findByIdAndUpdate(
      id,
      { businessId, amount, paymentDate, paymentMethod, transactionId, status },
      { new: true } 
    );
    if (!updatedTaxPayment) {
      return res.status(404).json({ message: 'Tax payment not found' });
    }
    res.status(200).json(updatedTaxPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteTaxPayment = async (req, res) => {
  const { id } = req.params; 
  try {
    const deletedTaxPayment = await TaxPayment.findByIdAndDelete(id);
    if (!deletedTaxPayment) {
      return res.status(404).json({ message: 'Tax payment not found' });
    }
    res.status(200).json({ message: 'Tax payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
