class Api::PostsController < ApplicationController
  def index
    @users = User.all
    @posts = Post.all
    if params[:profileId]
      @posts = Post.where(
        "author_id = ? AND recipient_id IS NULL", params[:profileId])
        .or(Post.where(["recipient_id = ?", params[:profileId]]))
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :index
  end

  private
  
  def post_params
    params.require(:post).permit(:body, :author_id, :recipient_id)
  end
end
