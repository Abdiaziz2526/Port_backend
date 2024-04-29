import express from 'express';
import Taxes from '../models/taxesModel.js';


// Create a new tax
export const createTax = async (req, res) => {
  try {
    const newTax = await Taxes.create(req.body);
    res.status(201).json(newTax);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tax', message: error.message });
  }
};

// Update an existing tax
export const updateTax = async (req, res) => {
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
export const deleteTax = async (req, res) => {
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

// Get tax by ID
export const getTaxById = async (req, res) => {
  try {
    const { id } = req.params;
    const tax = await Taxes.findById(id);
    if (!tax) {
      return res.status(404).json({ error: 'Tax not found' });
    }
    res.json(tax);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get tax by ID', message: error.message });
  }
};
