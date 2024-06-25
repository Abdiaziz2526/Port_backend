import TaxRate from '../models/TaxRate'; 


export const createTaxRate = async (req, res) => {
    try {
        const { business, user, product, taxAmount } = req.body;
        const newTaxRate = new TaxRate({
            business,
            user,
            product,
            taxAmount
        });

        const savedTaxRate = await newTaxRate.save();
        res.status(201).json(savedTaxRate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getAllTaxRates = async (req, res) => {
    try {
        const taxRates = await TaxRate.find();
        res.status(200).json(taxRates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getTaxRateById = async (req, res) => {
    try {
        const { id } = req.params;
        const taxRate = await TaxRate.findById(id);
        if (!taxRate) {
            return res.status(404).json({ message: 'Tax rate not found' });
        }
        res.status(200).json(taxRate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTaxRateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { business, user, product, taxAmount } = req.body;

        const updatedTaxRate = await TaxRate.findByIdAndUpdate(
            id,
            { business, user, product, taxAmount },
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


export const deleteTaxRateById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTaxRate = await TaxRate.findByIdAndDelete(id);

        if (!deletedTaxRate) {
            return res.status(404).json({ message: 'Tax rate not found' });
        }

        res.status(200).json({ message: 'Tax rate deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
