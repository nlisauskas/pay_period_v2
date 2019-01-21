class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.float :savings_target
      t.integer :age
      t.string :name
      t.integer :goal_retirement_age
      t.float :net_worth

      t.timestamps
    end
  end
end
