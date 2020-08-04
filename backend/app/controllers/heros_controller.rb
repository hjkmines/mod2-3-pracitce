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

  def new 
    @hero = Hero.new 
    @powers = Power.all 
  end 

  def show 
    @hero = Hero.find(params[:id])
    render json: @hero, include: [:power] 
  end 

  def create 
    @hero = Hero.create(hero_params)

    if @hero.valid?
      @hero.save 
      redirect_to hero_path(@hero)
    else 
      render :new 
      @hero.errors 
    end 
    render json: @hero 
  end 

private 

def hero_params 
  params.require(:hero).permit(:name, :super_name, :power_id)
end 

end
