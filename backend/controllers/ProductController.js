import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res
      .status(200)
      .json({ status: true, message: "Get Data successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductsById = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!response) {
      return res.status(404).json({
        status: false,
        message: "Data not found",
      });
    }
    res.status(200).json({
      status: true,
      message: "Get Data By ID successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ status: false, msg: error.message });
  }
};

export const createProducts = async (req, res) => {
  const { name, price } = req.body;

  try {
    const data = await prisma.product.create({
      data: {
        name,
        price,
      },
    });

    return res.status(201).json({
      status: true,
      message: "Created product successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const updateProducts = async (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  try {
    const response = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        price,
      },
    });
    return res.status(200).json({
      status: true,
      message: "Update product successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await prisma.product.delete({
      where: {
        id,
      },
    });
    return res.status(200).json({
      status: true,
      message: "Delete product successfully",
      data,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
