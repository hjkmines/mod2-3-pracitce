class Hero < ApplicationRecord
  belongs_to :power

  validates :name, :presence => {:message => "Name cannot be blank"}
  validates :super_name, :presence => {:message => "Super Name cannot be blank"}
  validates :power_id, uniqueness: true, :presence => {:message => "Power ID cannot be blank"}

end
