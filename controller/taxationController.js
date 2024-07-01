import Taxation from '../models/taxationModel.js'; 


export const createTaxtion = async (req, res) => {
    try {
        const { business, user, product, taxAmount,paymentDate } = req.body;
        const newTaxtion = new Taxation({
            business,
            user,
            product,
            taxAmount,
            paymentDate: new Date(paymentDate)
        });

        const savedTaxtion = await newTaxtion.save();
        res.status(201).json(savedTaxtion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getAllTaxtion = async (req, res) => {
    try {
        const taxtions = await Taxation.find().populate("user").populate("business").populate('product');
        res.status(200).json(taxtions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getMyTaxtion = async (req, res) => {
    try {
        const taxtions = await Taxation.findOne({user:req.params.id}).populate("user").populate("business").populate('products');;
        res.status(200).json(taxtions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getTaxtionById = async (req, res) => {
    try {
        const { id } = req.params;
        const taxtion = await Taxation.findById(id).populate("user").populate("business").populate('products');;
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
        const { business, user, product, taxAmount, paymentDate } = req.body;

        const updateTaxtionById = await Taxation.findByIdAndUpdate(
            id,
            { business, user, product, taxAmount,paymentDate: new Date(paymentDate) },
            { new: true }
        );

        if (!updateTaxtionById) {
            return res.status(404).json({ message: 'Tax rate not found' });
        }

        res.status(200).json(updateTaxtionById);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteTaxtionById = async (req, res) => {
    try {
        const taxation = await Taxation.findByIdAndUpdate(req.params.id);

        if (taxation) {
            res.status(200).json({ message: 'Taxation deleted successfully' });
            
        }else{
            res.status(404).json({ message: 'Taxtion not found' });
        }

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
