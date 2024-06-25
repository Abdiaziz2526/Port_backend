import Business from "../models/businessModel.js";


export const getAllBusiness = async (req, res) => {
    try {
      const businesses = await Business.find();
      res.status(200).json(businesses);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving businesses', error });
    }
  };
  
  export const getBusinessById = async (req, res) => {
    const { id } = req.params;
    try {
      const business = await Business.findById(id);
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
      res.status(200).json(business);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving business', error });
    }
  };
  
  export const registerNewBusiness = async (req, res) => {
    try {
      // const { name, email, password, logo, type, address, minIncome, maxIncome, taxIdentificationNumber } = req.body;
  
      // const isBusinessExists = await Business.findOne({ email });
  
      // if (isBusinessExists) {
      //   return res.status(400).json({ message: "Business already exists" });
      // }
  
      // const hashedPassword = await bcrypt.hash(password, 10);
  
      // const newBusiness = await Business.create({
      //   name,
      //   email,
      //   password: hashedPassword,
      //   logo,
      //   type,
      //   address,
      //   minIncome,
      //   maxIncome,
      //   taxIdentificationNumber,
      // });
  
      // res.status(201).json(newBusiness);

      const businessEntities = [];
        for (let i = 1; i <= 10; i++) {
            const businessEntity = {
                name: `Business Entity ${i}`,
                email: `entity${i}@example.com`,
                password: `password${i}`,
                logo: `https://example.com/logo${i}.png`,
                type: "Limited Liability Company (LLC)",
                address: {
                    street: `Street ${i}`,
                    city: `City ${i}`,
                    state: `State ${i}`,
                    zip: `0000${i}`,
                    country: 'Somalia'
                },
                minIncome: 1000 * i,
                maxIncome: 2000 * i,
                taxIdentificationNumber: `TIN0000${i}`
            };
            businessEntities.push(businessEntity);
        }

        const business = await Business.insertMany(businessEntities);
        if (business) {
          res.json(business)
        }


    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const business = await Business.findOne({ email });
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, business.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      const token = jwt.sign({ businessId: business._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  export const updateBusinessProfile = async (req, res) => {
    try {
      const { name, email, password, logo, type, address, minIncome, maxIncome, taxIdentificationNumber } = req.body;
  
      const business = await Business.findById(req.params.id);
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
      const business = await Business.findByIdAndDelete(req.params.id);
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
      res.status(200).json({ message: 'Business deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  