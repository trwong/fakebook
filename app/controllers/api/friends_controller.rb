class Api::FriendsController < ApplicationController

  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render :show
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def index
    @friends = User.find(params[:user_id]).accepted_friends_ids
  end

  def show
  
  end

  def update
    @friend = Friend.find_by(
      receiver_id: params[:user_id],
      requestor_id: params[:id]
    )
    if @friend.update_attributes(status: params[:friend][:status])
      render :show
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend = Friend.find_by(
      receiver_id: params[:user_id],
      requestor_id: params[:id]
    )
    if @friend.destroy
      render json: {}
      return
    else
      @friend = Friend.find_by(
      receiver_id: params[:id],
      requestor_id: params[:user_id]
      )
      if @friend.destroy
        render json: {}
      else
        render json: @friend.errors.full_messages, status: 422
      end
    end
  end

  private

  def friend_params
    params.require(:friend).permit(:requestor_id, :receiver_id, :status)
  end
end
