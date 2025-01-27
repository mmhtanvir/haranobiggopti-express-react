const {sequelize} = require("./db");
const {DataTypes} = require('sequelize')

sequelize.define('Users', {
  name: {
    type: DataTypes.STRING,
    validate: {
      max : 255,
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      max : 255,
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      max : 255,
    },
  },
  role: {
    type: DataTypes.STRING,
    validate: {
      max : 255,
    },
  },
});

sequelize.define('posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  personName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  personAge: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  personGender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  personLastSeenWearing: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  petBreed: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  petColor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  petName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documentType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documentIssuedBy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deviceType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brandModel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateLostFound: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  timeLostFound: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  locationLostFound: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageUpload: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  securityQuestion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  securityAnswer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rewardOffered: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactPhoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactEmailAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

sequelize.sync()
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
