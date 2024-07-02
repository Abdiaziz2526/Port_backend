import TaxPayment from '../models/taxPaymentModel.js';


export const getAllTaxPayments = async (req, res) => {
  try {
    const taxPayments = await TaxPayment.find().populate('business').populate('product');
    res.status(200).json(taxPayments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getMyTaxPayments = async (req, res) => {
  try {
    const taxPayments = await TaxPayment.find({business: req.params.id}).populate('business').populate('product');
    if (!taxPayments) {
      return res.status(404).json({ message: 'No payments found' });
    }

    res.status(200).json(taxPayments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaxPaymentById = async (req, res) => {
  try {
    const taxPayment = await TaxPayment.findById(req.params.id).populate('business').populate('product');
    if (!taxPayment) {
      return res.status(404).json({ message: 'Tax payment not found' });
    }
    res.status(200).json(taxPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new tax payment
export const addNewTaxPayment = async (req, res) => {
  try {
    const { business, amount, paymentDate, paymentMethod, transactionId, isPaid } = req.body; 
    const newTaxPayment = new TaxPayment({ business, amount, paymentDate, paymentMethod, transactionId, isPaid }); 


    await newTaxPayment.save();
    res.status(201).json(newTaxPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateTaxPayment = async (req, res) => {
  try {
    const { businessId, amount, paymentDate, paymentMethod, transactionId, status } = req.body; 

    const updatedTaxPayment = await TaxPayment.findByIdAndUpdate(
      req.params.id,
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
  try {
    const deletedTaxPayment = await TaxPayment.findByIdAndDelete(req.params.id);
    if (!deletedTaxPayment) {
      return res.status(404).json({ message: 'Tax payment not found' });
    }
    res.status(200).json({ message: 'Tax payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
