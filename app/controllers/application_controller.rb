class ApplicationController < ActionController::Base
  # TODO can we comment out protect from forgery b/c jquery has built in CSRF protection
  # protect_from_forgery with: :exception

  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def sign_out
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def require_signed_in
    # redirect_to TODO something unless signed_in?
  end
end
