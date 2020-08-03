class PowersController < ApplicationController

  def index 
    @powers = Power.all 
    render json: @powers
  end 

  def show 
    @power = Power.find(params[:id])
    render json: @power 
  end 

  def create 
    @power = Power.create(
      name: params[:name], 
      description: params[:description]
    )

    render json: @power 
  end 

  def update 
    @power = Power.find(params[:id])
    @power.update(
      name: params[:name], 
      description: params[:description]
    )

    render json: @power 
  end 

  def destroy 
    @powers = Power.all 
    @power = Power.find(params[:id])
    @powers.destroy
    render json: @powers 
  end 

end
