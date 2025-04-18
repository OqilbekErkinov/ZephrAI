import { defineStore } from "pinia";
import equipmentsService from "@/services/equipment.ts";

export const useEquipmentStore = defineStore("equipments", {
  state: () => ({
    equipments: [],
    equipment: {},
    isLoading: false,
    error: null,
  }),

  actions: {
    async getAllEquipments() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await equipmentsService.getEquipment();
        this.equipments = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
