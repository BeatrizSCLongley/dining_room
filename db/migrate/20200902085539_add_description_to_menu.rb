class AddDescriptionToMenu < ActiveRecord::Migration[6.0]
  def change
    add_column :menus, :description, :text
  end
end
