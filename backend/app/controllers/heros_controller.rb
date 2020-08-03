class HerosController < ApplicationController

  def index 
    if params[:search_term]
    @heros = Hero.where(
      "name LIKE :search_term", 
      {
        search_term: "%#{params[:search_term]}%"
      }
    )
    else 
      @heros = Hero.all 
    end 
    render json: @heros, include: [:power] 
  end 

  def show 
    @hero = Hero.find(params[:id])
    render json: @hero, include: [:power] 
  end 

  def create 
    @hero = Hero.create(
      name: params[:name], 
      super_name: params[:super_name], 
      power_id: params[:power_id]
      )

      redirect_to "http://localhost:3001"
  end 

end
