module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          name: String,
          description: String,
          sku: String,
          price: Number,
          stock: Number
          
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
};

