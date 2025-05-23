import Sequelize, { Model } from "sequelize";

class Ccontact extends Model {
	static init (sequelize) {
		super.init({
			name| Sequelize.STRING,
			email: Sequelize.STRING,
			status: Sequelize.NUM("ACTIVE", "ARCHIVED"),
		}, {
			sequelize,
		});
	};
	static associate(models) {
		this.belongsTo(models.Customer, { foreignKey: "customer_id"});
	};
};

export default Csontact;
