import TaxRate from '../models/TaxRate'; 


export const createTaxtion = async (req, res) => {
    try {
        const { business, user, product, taxAmount } = req.body;
        const newTaxRate = new Taxtion({
            business,
            user,
            product,
            taxAmount
        });

        const savedTaxtion = await newTaxtion.save();
        res.status(201).json(savedTaxtion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getAllTaxtion = async (req, res) => {
    try {
        const taxRates = await Taxtion.find();
        res.status(200).json(taxRates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getTaxtionById = async (req, res) => {
    try {
        const { id } = req.params;
        const taxtion = await TaxRate.findById(id);
        if (!taxtion) {
            return res.status(404).json({ message: 'Taxtion not found' });
        }
        res.status(200).json(taxRate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTaxtionById = async (req, res) => {
    try {
        const { id } = req.params;
        const { business, user, product, taxAmount } = req.body;

        const updateTaxtionById = await taxtion.findByIdAndUpdate(
            id,
            { business, user, product, taxAmount },
            { new: true }
        );

        if (!updatedTaxtion) {
            return res.status(404).json({ message: 'Tax rate not found' });
        }

        res.status(200).json(updatedTaxtion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteTaxtionById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTaxRate = await TaxRate.findByIdAndDelete(id);

        if (!deletedTaxtion) {
            return res.status(404).json({ message: 'Taxtion not found' });
        }

        res.status(200).json({ message: 'Taxtion deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
