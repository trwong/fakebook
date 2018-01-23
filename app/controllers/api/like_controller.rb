class Api::LikeController < ApplicationController
  def index
    @likes = Like.where(
      likeable_id: params[:likeable_id],
      likeable_type: params[:likeable_type]
    )
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.where(
      likeable_id: params[:likeable_id],
      likeable_type: params[:likeable_type],
      liker_id: params[:liker_id]
    )
    @like.delete
    render json: {}
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end
end
