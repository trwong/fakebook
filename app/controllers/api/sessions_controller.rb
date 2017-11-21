class Api::SessionsController < ApplicationController
def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render json: ["successful log in"]
    else
      render json: ["Incorrect username or password"], status: 401
    end
  end

  def destroy
    if current_user
      sign_out
      render json: {}
    else
      render json: ["No user logged in"], status: 404
    end
  end
end
