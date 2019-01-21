module Api::V1
  class ExpensesController < ApplicationController
    before_action :set_expense, only: [:show, :update, :destroy]

    # GET /expenses
    def index
      @expenses = Expense.order(:id)

      render json: @expenses
    end

    # GET /expenses/1
    def show
      render json: @expense
    end

    # POST /expenses
    def create
      @expense = Expense.new(expense_params)

      if @expense.save
        render json: @expense, status: :created
      else
        render json: @expense.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /expenses/1
    def update
      if @expense.update(expense_params)
        render json: @expense
      else
        render json: @expense.errors, status: :unprocessable_entity
      end
    end

    # DELETE /expenses/1
    def destroy
      @expense.destroy
      if @expense.destroy
        head :no_content, status: :ok
      else
        render json: @expense.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_expense
        @expense = Expense.find(params[:id])
      end

      # Only allow a trusted parameter "white expense" through.
      def expense_params
        params.require(:expense).permit(:description, :amount, :user_id, :category)
      end
  end
end
