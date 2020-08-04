class Hero < ApplicationRecord
  belongs_to :power

  validates_presence_of :name, :super_name, :power_id
  validates :super_name, uniqueness: true 
end
