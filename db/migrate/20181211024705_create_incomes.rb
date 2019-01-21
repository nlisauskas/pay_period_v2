class CreateIncomes < ActiveRecord::Migration[5.2]
  def change
    create_table :incomes do |t|
      t.string :description
      t.float :amount
      t.integer :user_id
      t.string :category

      t.timestamps
    end
  end
end
