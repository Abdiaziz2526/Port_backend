import Users from "../models/usersModel.js";
import generateToken from "../utils/generateToken.js";

export const getUsers = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
      : {};
    const users = await Users.find({...keyword});
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user =await Users.findOne({ email });
    if (user) {
      if (user.password == password) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          phone: user.phone,
          address: user.address,
          token:generateToken(user._id),
        });
      } else {
        res.status(400).json({ message: "wrong password" });
      }
    } else {
      res.status(400).json({ message: "user not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


export const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const isUserExists = await Users.findOne({ email });

    if (isUserExists) {
      res.status(400).json({ message: "user already exists" });
    } else {
      const user = await Users.create({
        name,
        email,
        password,
        phone,
        address,
      });

      res.status(201).json(user);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const user = await Users.findById(req.params.id);

    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.phone = phone;
      user.address = address;

      const updatedUser = await user.save();

      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
