class Api::LikesController < ApplicationController
  def index
    @likes = Like.where(
      likeable_id: params[:like][:likeable_id],
      likeable_type: params[:like][:likeable_type]
    )
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    @like = Like.new(like_params)
    p "-----------------"
    p @like
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.where(
      likeable_id: params[:like][:likeable_id],
      likeable_type: params[:like][:likeable_type],
      liker_id: params[:like][:liker_id]
      )[0]
    p "-----------------"
    p @like
    # debugger
    @like.delete
    render json: {}
  end

  private

  def like_params
    # debugger
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end
end
