import  express  from "express";
const mongoose = require('mongoose');

const Taxes = require('./taxesModel');

// Create a new tax
exports.createTax = async (req, res) => {
  try {
    const newTax = await Taxes.create(req.body);
    res.status(201).json(newTax);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tax', message: error.message });
  }
};

// Update an existing tax
exports.updateTax = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTax = await Taxes.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTax) {
      return res.status(404).json({ error: 'Tax not found' });
    }
    res.json(updatedTax);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tax', message: error.message });
  }
};

// Delete an existing tax
exports.deleteTax = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTax = await Taxes.findByIdAndDelete(id);
    if (!deletedTax) {
      return res.status(404).json({ error: 'Tax not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete tax', message: error.message });
  }
};
