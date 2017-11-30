class Api::CommentsController < ApplicationController
  def index
    @comments = Post.find(params[:post_id]).comments
    @users = User.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      p @comment.errors.full_messages
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    render json: {}
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id)
  end
end
