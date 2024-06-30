import Business from "../models/businessModel.js";
import generateToken from "../utils/generateToken.js";

export const getAllBusiness = async (req, res) => {
  try {
    const businesses = await Business.find().populate('address');
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving businesses', error });
  }
};

export const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id).populate('address');
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    } else {
      res.status(200).json({
        _id: business._id,
        name: business.name,
        email: business.email,
        password: business.password,
        type: business.type,
        phone:business.phone,
        address: business.address,
        minIncome: business.minIncome,
        maxIncome: business.maxIncome,
        taxIdentificationNumber: business.taxIdentificationNumber,
        token: req.params.token,
      });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error retrieving business', error });
  }
};

export const registerNewBusiness = async (req, res) => {
  try {
    const { name, email, password, type, phone, address, minIncome, maxIncome, taxIdentificationNumber } = req.body;

    const isBusinessExists = await Business.findOne({ email });

    if (isBusinessExists) {
      return res.status(400).json({ message: "Business already exists" });
    } else {

      const newBusiness = await Business.create({
        name,
        email,
        password,
        type,
        phone,
        address,
        minIncome,
        maxIncome,
        taxIdentificationNumber,

      });

      res.status(201).json(newBusiness);

    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const business = await Business.findOne({ email }).populate('address');
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    } else {

      if (business.password != password) {
        return res.status(400).json({ message: 'Invalid password' });
      } else {
        res.status(200).json({
          _id: business._id,
          name: business.name,
          email: business.email,
          password: business.password,
          type: business.type,
          phone: business.phone,
          address: business.address,
          minIncome: business.minIncome,
          maxIncome: business.maxIncome,
          taxIdentificationNumber: business.taxIdentificationNumber,
          token: generateToken(business._id)
        });
      }
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateBusinessProfile = async (req, res) => {
  try {
    const { name, email, password, phone, type, address, minIncome, maxIncome, taxIdentificationNumber } = req.body;

    const business = await Business.findById(req.params.id).populate('address');
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      business.password = hashedPassword;
    }

    business.name = name;
    business.email = email;
    business.logo = logo;
    business.type = type;
    business.phone = phone;
    business.address = address;
    business.minIncome = minIncome;
    business.maxIncome = maxIncome;
    business.taxIdentificationNumber = taxIdentificationNumber;

    const updatedBusiness = await business.save();
    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id).populate('address');
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.status(200).json({ message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
